import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxDeleteConfirmComponent } from './src/ngx-delete-confirm.component';

@NgModule({
    declarations: [
        NgxDeleteConfirmComponent
    ],
    imports     : [
        CommonModule,
        FormsModule
    ],
    exports     : [
        NgxDeleteConfirmComponent
    ]
})
export class NgxDeleteConfirmModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgxDeleteConfirmModule
        };
    }

}