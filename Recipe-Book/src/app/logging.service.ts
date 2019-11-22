import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class LoggingService{
    lastmms: string;

    printLog(mms: string){
        console.log(`Old Message: ${this.lastmms}`);
        this.lastmms = mms;
        console.log(`New message: ${this.lastmms}`);
    }

}