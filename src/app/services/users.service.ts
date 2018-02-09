import { User}from '../models/user';
import { Injectable } from '@angular/core';
import { APIService} from '../common/api.service';
import { AppConfiguration} from '../common/config/app-configuration.service';
import { AuthService} from '../common/auth.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { resource } from 'selenium-webdriver/http';



@Injectable()
export class UsersService extends APIService {
private resourceUrl = 'user';

  constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http
  ) {
    super(config, authService, http);
  }

  login(username: string, password: string) {
    return this.post(this.resourceUrl+'/login', { username, password }, { credentials: false }).map(loginResponse => {
      if (loginResponse) {
        this.authService.accessToken = loginResponse.accessToken;
      }
    });
  }

  list(): Observable<User[]> {
      return this.get(this.resourceUrl+"/items");
  }

  create(username:string, name: string,email:string, lastname: string, image: string,password:string): Observable<User> {
    return this.post(this.resourceUrl+"/item", new User(username,name,email,lastname,image,password));
  } 

  filterByEmail(email :string){
    console.log(this.resourceUrl+"/filter/"+email)
    return this.get(this.resourceUrl+"/filter/"+email)
    
  }

}