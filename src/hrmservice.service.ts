import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Specialisation } from './app/Models/specialisation.model';


@Injectable({
  providedIn: 'root'
})
export class HRMServiceService {

  readonly specialisationAPiUrl = "http://localhost:62733/api/OFOSpecialization";
  constructor(private http: HttpClient) { }

  getSpecialisations(): Observable<any[]> {
    return this.http.get<any>(this.specialisationAPiUrl + '/GetOFOSpecializations');
  }

  addSpecialisation(data: Specialisation) {
    const headers = { 'Content-Type': 'application/json; charset=UTF-8' };
    this.http.post<Specialisation>(this.specialisationAPiUrl + '/InsertOFOSpecializationAsync/Insert', data, { headers }).subscribe(result => {
        console.log(result)

        if(result){
          window.location.href = '/specialisations'
        }
    });


  }

  getSpecialisationsByID(OFOSpecializationID: number) {

    var url = this.specialisationAPiUrl+'/GetOFOSpecializationsBySpecialisationID?OFOSpecialisationID='+OFOSpecializationID;
    return this.http.get<any>(url);
  }

  updateSpecialisation(data: Specialisation) {
    const headers = { 'Content-Type': 'application/json; charset=UTF-8'  };
    this.http.put<Specialisation>(this.specialisationAPiUrl + '/UpdateOFOSpecializationAsync/Update', data, { headers }).subscribe(result => {
      console.log(result)

      if(result){
        window.location.href = '/specialisations'
      }
  });
  }
}
