import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HRMServiceService } from 'src/hrmservice.service';
import { Specialisation } from '../Models/specialisation.model';

@Component({
  selector: 'app-create-specialisation',
  templateUrl: './create-specialisation.component.html',
  styleUrls: ['./create-specialisation.component.css']
})
export class CreateSpecialisationComponent implements OnInit {

  specialisationList!: Observable<any[]>;

  constructor(private service: HRMServiceService) { }

  private newBook: Specialisation = new Specialisation();

  form = new FormGroup({
    "OFOCodeID": new FormControl("", Validators.required),
    "Description": new FormControl("", Validators.required),
    "CreatedOn": new FormControl("", Validators.required),
    "CreatedByUserID": new FormControl("", Validators.required),
  });

  @Input() specialisation: any;
  OFOCodeID: number = 0;
  Description: string = "";
  CreatedOn: string = "2022-04-10T11:14:56";
  CreatedByUserID: number = 88511;

  addSpecialisation() 
  {
    var specialisation = {
      OFOCodeID: this.form.value.OFOCodeID,
      Description:this.form.value.Description,
      CreatedOn:this.form.value.CreatedOn,
      CreatedByUserID:this.form.value.CreatedByUserID,
      DeletedOn: "2022-04-10T11:14:56",
      DeletedByUserID:null
    }

    this.newBook = <Specialisation> this.form.value;

    console.log(this.newBook);
    this.service.addSpecialisation(this.newBook);
  }

  ngOnInit(): void {
    this.specialisationList = this.service.getSpecialisations();
  }
}
