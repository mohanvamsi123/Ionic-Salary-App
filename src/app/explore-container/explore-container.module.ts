import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
import { DatePickerComponent } from '../common/date-picker/date-picker.component';
import { ProfileDisplayComponent } from '../common/profile-display/profile-display.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ExploreContainerComponent, DatePickerComponent, ProfileDisplayComponent, ],
  exports: [ExploreContainerComponent, DatePickerComponent, ProfileDisplayComponent]
})
export class ExploreContainerComponentModule {}
