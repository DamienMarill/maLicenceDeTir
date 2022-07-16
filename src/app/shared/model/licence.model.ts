export interface Licence {
  birthDate: string;
  birthDateFormat: string;
  category: string;
  clubCode: string;
  clubId: string | null;
  clubName: string | null;
  codeEan: string;
  endSeason: string;
  endSeasonCustom: string;
  endSeasonCustomFormat: string;
  entSigPres: string | null;
  firstname: string;
  fonction: string | null;
  gcclogo: string | null;
  isValidLicence: boolean;
  lastname: string;
  libSeason: string;
  licPicture: any;
  licenseNumber: string;
  ligueName: string | null;
  photo: string | null;
  qcm: string | null;
  startSeason: string;
  startSeasonFormat: string;
  stateLicence: string;
  urlQrCode: string;
  validityDate: string | null;
}
