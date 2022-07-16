import { Injectable } from '@angular/core';
import {Licence} from "../model/licence.model";
import {Club} from "../model/club.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public licence: Licence | undefined;
  public club: Club | undefined;

  constructor(
    private http: HttpClient,
  ) {
    const licence = localStorage.getItem('licence');
    const club = localStorage.getItem('club');
    if (licence && club){
      this.applyDatas(JSON.parse(licence), JSON.parse(club));
    }
  }

  islogged(): boolean{
    return this.licence !== undefined;
  }

  applyDatas(licence: Licence, club: Club){
    this.licence = licence;
    this.club = club;
  }

  async storageDatas(licence: Licence, club: Club, token: string) {
    club.urlImage = 'https://eden.fftir.org/image/documentItac/logos/' + club.urlImage;

    let licenceId = new URLSearchParams(licence.urlQrCode.split('?')[1]).get('N');
    licence.licPicture = await this.getBase64ImageFromUrl('https://eden.fftir.org/image/adherent/' + token + '/' + licenceId);

    this.applyDatas(licence, club);

    localStorage.setItem('licence', JSON.stringify(licence));
    localStorage.setItem('club', JSON.stringify(club));
  }

  async getBase64ImageFromUrl(imageUrl: string) {
    var res = await fetch(imageUrl);
    var blob = await res.blob();

    return new Promise((resolve, reject) => {
      var reader  = new FileReader();
      reader.addEventListener("load", function () {
        resolve(reader.result);
      }, false);

      reader.onerror = () => {
        return reject(this);
      };
      reader.readAsDataURL(blob);
    })
  }

  clearDatas(){
    localStorage.removeItem('licence');
    localStorage.removeItem('club');
    this.licence = undefined;
    this.club = undefined;
  }
}
