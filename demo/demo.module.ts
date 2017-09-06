import { NgModule } from '@angular/core';
import { NgxDeleteConfirmModule } from '../src/index';
import { BrowserModule } from '@angular/platform-browser';
import { DemoComponent } from './demo.component';

@NgModule({
    declarations: [DemoComponent],
    imports: [BrowserModule, NgxDeleteConfirmModule.forRoot()],
    bootstrap: [DemoComponent]
})
export class DemoModule {}