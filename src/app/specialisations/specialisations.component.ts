import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HRMServiceService } from 'src/hrmservice.service';
import { Specialisation } from 'src/app/Models/specialisation.model';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-specialisations',
  templateUrl: './specialisations.component.html',
  styleUrls: ['./specialisations.component.css']
})
export class SpecialisationsComponent implements OnInit {

  specialisationList!: Observable<any[]>;
  specisalisationModl: Specialisation = new Specialisation();
  private newBook: Specialisation = new Specialisation();

  form = new FormGroup({
    "OFOSpecializationID": new FormControl("", Validators.required),
    "OFOCodeID": new FormControl("", Validators.required),
    "Description": new FormControl("", Validators.required),
    "CreatedOn": new FormControl("", Validators.required),
    "CreatedByUserID": new FormControl("", Validators.required),
  });


  constructor(private service: HRMServiceService) { }


  ngOnInit(): void {

    this.specialisationList = this.service.getSpecialisations();

  }

  getSpecialisationsByID(OFOSpecializationID: number){
    this.service.getSpecialisationsByID(OFOSpecializationID).subscribe((response:Specialisation) => {
      this.specisalisationModl = response;
    });
  }


  updateSpecialisation() 
  {
    var specialisation = {
      OFOSpecializationID: this.form.value.OFOSpecializationID,
      OFOCodeID: this.form.value.OFOCodeID,
      Description:this.form.value.Description,
      CreatedOn:this.form.value.CreatedOn,
      CreatedByUserID:this.form.value.CreatedByUserID
    }

    this.newBook = <Specialisation> this.form.value;

    console.log(this.newBook);
    this.service.updateSpecialisation(this.newBook);
  }
}
