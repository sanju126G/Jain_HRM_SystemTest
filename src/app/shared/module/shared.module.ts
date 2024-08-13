import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
// import { NgOtpInputModule } from 'ng-otp-input';
import { HttpClientModule } from '@angular/common/http';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
// import { NgxSpinnerModule } from "ngx-spinner";
// import { SpinnerComponent } from 'src/app/spinner/spinner.component';
// import{NgChartsModule}from 'ng2-charts'
// import { NumberOnlyDirective } from '../number-only.directive';
interface NgxSpinnerConfig {
  type?: string;
}
@NgModule({
  declarations:[],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatSortModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatBadgeModule,
    MatSelectModule,
    MatSidenavModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatDividerModule,
    MatTableModule,
    MatDialogModule,
    HttpClientModule,
    MatStepperModule,
    MatTabsModule,
    MatProgressBarModule,
    MatRadioModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    // CanvasJSAngularChartsModule
    ],

  exports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatSortModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatBadgeModule,
    MatSelectModule,
    MatSidenavModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatDividerModule,
    MatTableModule,
    MatDialogModule,
    HttpClientModule,
    MatStepperModule,
    MatTabsModule,
    MatProgressBarModule,
    MatRadioModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    // CanvasJSAngularChartsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
