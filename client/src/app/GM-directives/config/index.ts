import { AuthInterceptor } from './auth-interceptor'
import { AuthService } from './auth.service'
import { AuthGuard } from './can-active.service'
export class Config {
  static API_PREFIX =  'api/v1';
  static AuthInterceptor = AuthInterceptor;
  static AuthService = AuthService;
  static AuthGuard = AuthGuard;
}
