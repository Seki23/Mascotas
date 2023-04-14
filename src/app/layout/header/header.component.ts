import { Component } from '@angular/core';
import { LOGO } from 'src/app/constants/constants';
import { API_PETS } from 'src/app/constants/routes/routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  logo:string=LOGO;
  pets=API_PETS;

}
