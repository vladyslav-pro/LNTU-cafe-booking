import {Component, HostBinding, Input} from "@angular/core";

@Component({
  standalone: true,
  selector: 'svg-arrow',
  templateUrl: 'svg-arrow.component.html',
  styleUrl: 'svg-arrow.component.scss',
})
export class SvgArrowComponent {
  @Input() fillColor?: string = 'white';
  // @HostBinding('')

}
