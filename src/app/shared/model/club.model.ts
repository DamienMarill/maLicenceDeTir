export interface Club {
  address1: string;
  address2: string;
  address3: string;
  adherentsNb: number;
  adherentsNbNmois: number;
  cdp: string;
  city: string;
  clubId: string | null;
  declarationDate: string;
  declarationNumber: string;
  disciplinesPracticed: string[];
  email: string;
  fedAffDate: string;
  fedAffNumber: string;
  latitude: number;
  licencePrices: {
    comLabel: string;
    licenceCode: string;
    licenceLabel: string;
    licencePrice: number;
    ligLabel: string;
    partCom: number;
    partFftir: number;
    partLig: number;
    seasonId: string;
    seasonLabel: string;
  }[];
  longitude: number;
  name: string;
  numApprovalDepart: string | null;
  numApprovalInternational: string | null;
  numApprovalNational: string | null;
  numApprovalReg: string | null;
  numDDJS: string | null;
  numEAPS: string | null;
  numTel: string | null;
  parents: {
    code: string
    entity: string
    label: string
    type: string
  }[];
  sharedShootingRange: any[];
  shootingRange: {
    category: string;
    id: string | null;
    isActive: boolean;
    level: string;
    ownserEntityLabel: string | null;
    ownerEntityNumber: string | null;
    places: string;
    type: string;
  }[];
  timetable: string[];
  urlFacebook: string | null;
  urlImage: string | null;
  urlInstagram: string | null;
  urlTwitter: string | null;
  urlWebsite: string | null;
}
