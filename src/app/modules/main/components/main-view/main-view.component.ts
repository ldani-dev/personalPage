import { Component } from '@angular/core';
import { faLinkedinIn, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent  {

  public controls = [
    {
      icon: faLinkedinIn,
      name: 'linkedIn',
      link: 'https://www.linkedin.com/in/daniel-lopezj/'
    },
    {
      icon: faTwitter,
      name: 'twitter',
      link: 'https://twitter.com/daniellopezj01'
    },
    {
      icon: faGithub,
      name: 'hithub',
      link: 'https://github.com/dlopez-dev'
    },
    {
      icon: faInstagram,
      name: 'instagram',
      link: 'https://www.instagram.com/daniellopezzj/'
    },

  ]

  constructor() { }

}
