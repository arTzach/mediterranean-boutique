import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom, tap} from 'rxjs';

export type Config = {
  languages: string[];
  defaultLanguage: string;
}
type ConfigKey = keyof Config;
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config!: Config;
  private httpClient= inject(HttpClient);
  constructor() {
    this.httpClient.get<Config>('config.json').subscribe((res: any) => {
      this.config = res;
    })
  }

  loadConfig(): Promise<void> {
    return firstValueFrom(
      this.httpClient.get<Config>('config.json').pipe(tap((res: any) => {
        this.config = res;
      }))
    )
  }
  get(key: ConfigKey): any {
    return this.config?.[key];
  }
}
