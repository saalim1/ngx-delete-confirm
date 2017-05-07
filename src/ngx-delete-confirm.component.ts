import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ngx-delete-confirm',
    template: require('./ngx-delete-confirm.html'),
    styles  : [require('./ngx-delete-confirm.css')]
})
export class NgxDeleteConfirmComponent {
    @Input('question') question: string = 'Are you sure?';
    @Output('onConfirm') onConfirm: EventEmitter<any> = new EventEmitter();
    @Output('onCancel') onCancel: EventEmitter<any> = new EventEmitter();
                         show: boolean = false;

    sendConfirm(): void {
        this.onConfirm.emit();
        this.show = false;
    }

    sendCancel(): void {
        this.onCancel.emit();
        this.show = false;
    }
}
