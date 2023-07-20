import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Calendar, CalendarOptions, EventClickArg, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import interactionPlugin from '@fullcalendar/interaction';
import { EventImpl } from '@fullcalendar/core/internal';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  modalRef?: BsModalRef;

  formEvento!: FormGroup;
  formEditEvento!: FormGroup;
  editEvent!: EventImpl;
  calendarEvents!: EventInput[];
  nuevoEvento!: EventInput;
  eventos: any = [
    {
      title: 'Aprender Algo de Angular',
      date: '2023-07-29',
      color: '0000FF'
    },
    {
      title: 'Sesion de la AGU',
      date: '2023-07-24',
      color: '0000FF'
    },
    {
      title: 'Clases de backend',
      date: '2023-07-16',
      color: '0000FF'
    },
    {
      title: 'Sesion de la AGU',
      date: '2023-07-20',
      color: '0000FF'
    },
    {
      id: '3',
      title: 'Semana de examenes',
      start: new Date().setDate(new Date().getDate() + 3),
      end: new Date().setDate(new Date().getDate() + 8),
      className: 'bg-warning text-white'
    },

  ]

  @ViewChild('templateNuevo') templateNuevo!: string;
  @ViewChild('templateEditar') templateEditar!: string;
  config = {
    animated: true,
  }


  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    themeSystem: 'bootstrap',
    events: this.eventos,
    dateClick: this.openModal.bind(this),
    eventClick: this.handleEventClick.bind(this),
  };


  openModal(event: EventInput) {
    this.nuevoEvento = event;
    this.modalRef = this.modalService.show(this.templateNuevo, this.config);
  }
  constructor(private modalService: BsModalService, private fb: FormBuilder) { }



  ngOnInit(): void {
    this.formEvento = this.fb.group({
      title: ['', [Validators.required]],
    });
    this.formEditEvento = this.fb.group({
      editTitle: ['', [Validators.required]],
    });
    this.actualizar();
  }

  actualizar() {
    this.calendarEvents = this.eventos;
  }

  guardarEvent() {
    if (this.formEvento.valid) {
      const title = this.formEvento.get('title')!.value;
      const calendar: Calendar = this.nuevoEvento["view"].calendar;
      calendar.addEvent({
        id: '4',
        title: title,
        start: this.nuevoEvento.date,
        end: this.nuevoEvento.date,
        className: 'bg-success text-white',
      })
      this.formEvento = this.fb.group({
        title: '',
      });
    }
    this.closeEventModal();
    this.modalRef?.hide();
  }

  closeEventModal() {
    this.formEvento = this.fb.group({
      title: '',
    });
    this.modalRef?.hide();
  }

  handleEventClick(datos: EventClickArg) {
    this.editEvent = datos.event;
    this.formEditEvento = this.fb.group({
      title: `${datos.event.title}`,
    });
    this.modalRef = this.modalService.show(this.templateEditar, this.config);

  }

  guardarEdicion() {
    const editTitle = this.formEditEvento.get('title')!.value;
    const editId = this.calendarEvents.findIndex(
      (x) => {
        x.id + '' === this.editEvent.id + ''
      }
    );
    this.editEvent.setProp('title', editTitle);

    this.calendarEvents[editId] = {
      ...this.editEvent,
      title: editTitle,
      id: this.editEvent.id,
      classNames: 'bg-success text-white',
    };

    this.formEditEvento = this.fb.group({
      editTitle: '',
      editCategory: '',
    });
    this.modalRef?.hide();

  }

  confirm() {
    Swal.fire({
      title: '¿Estas seguro?',
      text: "¡No podras revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrarlo!'
    }).then((result) => {
      if (result.value) {
        this.deleteEventData();
        Swal.fire('¡Eliminado!', 'El evento ha sido eliminado.', 'success');
      }
    });
  }

  deleteEventData() {
    this.editEvent.remove();
    this.modalRef?.hide();
  }

}
