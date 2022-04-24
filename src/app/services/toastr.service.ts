import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";

@Injectable({
  providedIn: 'root',
})
export class ToastrService {
  constructor(private messageService: MessageService) {}

  showSuccessToast(title: string, message: string){
    this.messageService.add({ severity: 'success', summary: title, detail: message })
  }

  showErrorToast(title: string, message: string){
    this.messageService.add({ severity: 'error', summary: title, detail: message })
  }
}
