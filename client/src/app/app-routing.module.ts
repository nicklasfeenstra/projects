import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageComponent } from './message/message.component'
import { ListComponent } from './list/list.component';

const routes: Routes = [
    {
        path: '',
        component: MessageComponent
    },
    {
        path: 'list',
        component: ListComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
