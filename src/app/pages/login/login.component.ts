import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {faInfoCircle, faSpinner, faSpinnerThird, faTimesCircle} from "@fortawesome/pro-solid-svg-icons";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {DataService} from "../../shared/services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logginForm: FormGroup;

  faFont = {
    faInfoCircle,
    faTimesCircle,
    faSpinner
  }
  loading: boolean = false;

  token: string | null = null;

  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    public http: HttpClient,
    public dataService: DataService,
    private router: Router,
  ) {
    this.logginForm = this.fb.group({
      userId: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  submit(){
    if (this.dataService.verifyTestAccount(this.logginForm.value)){
      this.router.navigate(['/']);
      return ;
    }
    this.loading = true;
    this.http.post('https://eden.fftir.org/auth/login', this.logginForm.value)
      .toPromise().then(async (data: any) => {
        this.token = data.jwtToken;
        let licence = await this.getLicence();
        let club = await this.getClub();
        if (licence.isValidLicence && this.token){
          await this.dataService.storageDatas(licence, club, this.token);
          this.loading = false;
          this.router.navigate(['/']);
        }else{
          this.errorMessage = 'Votre licence n\'est pas valide';
          this.loading = false;
        }
      }, error => {
        this.errorMessage = "Identifiant ou mot de passe incorrect";
        this.loading = false;
      })
  }

  async getLicence(){
    return await this.http.get('https://eden.fftir.org/licence', this.getHeaders() )
      .toPromise().then((data: any) => { return data})
  }
  async getClub(){
    return await this.http.get('https://eden.fftir.org/club/get_user_club', this.getHeaders() )
      .toPromise().then((data: any) => { return data})
  }

  getHeaders(){
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + this.token,
      })
    };
  }
}
