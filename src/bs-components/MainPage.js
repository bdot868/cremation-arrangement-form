import React from 'react';
import Package from './Package';
import Form from './Form';
import Confirmation from './ConfirmationPage';
import FinalForm from './FinalForm';
import urn from './urn.png';
import container from './container.png'


const data = {
  cemeteryLocations: ['Indio', 'Coachella', 'Cathedral City'],
  location: [ //dropdown data for location
    {
      english: 'Another Funeral Home',
      spanish: 'Otra Funeraria',
    },
    {
      english: 'Coroner’s Office',
      spanish: 'Oficina del Forense'
    },
    {
      english: 'Hospital',
      spanish: 'Hospital'
    },
    {
      english: 'Nursing Facility',
      spanish: 'Centro de Enfermería'
    },
    {
      english: 'Residence',
      spanish: 'Residencia'
    },
    {
      english: 'Other',
      spanish: 'Otro'
    }
  ],
  relationship: [ //dropdown data for relationship
    {
      english: 'Spouse',
      spanish: 'Cónyuge'
    },
    {
      english: 'Domestic partner',
      spanish: 'Compañero doméstico'
    },
    {
      english: 'Adult Child',
      spanish: 'Hijo Adulto'
    },
    {
      english: 'Parent',
      spanish: 'Padre/Madre'
    },
    {
      english: 'Adult Sibling',
      spanish: 'Hermano mayor'
    },
    {
      english: 'Grandparent',
      spanish: 'Abuelo/Abuela',
    },
    {
      english: 'Adult grandchild',
      spanish: 'Nieto adulto/Nieta adulta'
    },
    {
      english: 'Adult niece/nephew',
      spanish: 'Sobrina adulta/sobrino adulto',
    },
    {
      english: 'Adult aunt/uncle',
      spanish: 'Tío adulto/tía adulta'
    },
    {
      english: 'Adult great grandchild',
      spanish: 'Bisnieto adulto/Bisnieta adulta'
    },
    {
      english: 'Great grandparent',
      spanish: 'Bisabuelo/ Bisabuela'
    },
    {
      english: 'Adult first cousin',
      spanish: 'Primo en primer grado adulto'
    },
    {
      english: 'Agent with Power of Attorney (Healthcare)',
      spanish: 'Agente con poder notarial (cuidado médico)'
    },
    {
      english: 'Conservator of the person',
      spanish: 'Conservador de la persona'
    },
    {
      english: 'Conservator of the estate',
      spanish: 'Conservador del testamento'
    },
    {
      english: 'Public Administrator',
      spanish: 'Administrador Público',
    },
    {
      english: 'Other',
      spanish: 'Otro'
    },
  ]
}

// Object container holding English & Spanish Translations
let content = {
  English: {
    lang: 'en',
    startBtn: 'Start Now',
    backBtn: 'Back',
    submitBtn: 'Agree & Submit',
    printBtn: 'Print',
    emailBtn: 'Email to Self',
    alert: 'Confirmation has been sent!',
    choose: 'Choose One',
    orCallText: 'or Call',
    contactNumber: '844-774-8431',
    contactHref: 'tel:8447748431',
    received: 'Form Received!',
    marketingHeadline: 'Begin to make cremation arrangements here:',
    cremationPageLink: 'Click here to learn more about cremation at Forest Lawn Coachella Valley. >>',
    gplLink: 'View all prices for cremation and traditional burials here. >>',
    packageDisclaimer: "*Does not include sales tax and Department of Consumer Affair's fee.  No additions or deletions are permitted to this package",
    packageTitle: 'Essential Cremation Package',
    featuresHeadline: 'This package includes:',
    packageDetails: 'Package Details',
    packageFeatures: `
      <li>Basic use of our facilities and services</li>
      <li>The transfer of your loved one into our care <em>(within 75 mile radius)</em></li>
      <li>Refrigeration</li>
      <li>Crematory Fee</li>
      <li>Death Certificate Processing</li>
      <li>Death Certificate (1)</li>
      <li>Permit (1)</li>`,
    products: {
      alternativeContainer: {
        title: 'Alternative Container (2-000)',
        description: 'Heavy cardboard box (for cremation use only)',
        imageSrc: container,
        price: '$58.00',
        disclaimer: 'The law requires the use of a cremation container to encase the body during the cremation process. Our cremation container is a basic cardboard box.'
      },
      urn: {
        title: 'Basic Plastic Urn',
        description: 'Plastic Urn',
        imageSrc: urn,
        price: '$34.00'
      }
    },
      formHeaderText: `<p>
        The following are a few questions to help guide you through the arrangement process.
        If at any time you have any questions, please call <a class="phoneNumber green-font" href="tel:8447748431">844-774-8431</a> and we'd be honored to assist you.
      </p>
      <h4>Interested in adding personal touches and a meaningful ceremony before or after cremation?</h4>
      <p>
        We’re here to also help you craft a personalized service with family and friends where they can pay tribute,
        share stories and comfort each other. With a wide array of unique urns, onsite chapels, and special rooms for
        services and receptions, we’ll help you arrange a fitting remembrance. Please call <a class="phoneNumber green-font" href="tel:8447748431">844-774-8431</a>, and we’ll be there every step of the way.
      </p>`,
      arrangementRecipient: 'Today, I would like to make arrangements for:',
      insuranceDisclaimer: 'Funeral planning is funded through the purchase of whole life insurance from National Guardian Life Insurance Company, Madison, WI (NGL). A qualified Forest Lawn® planning advisor, who has been both licensed by the state and appointed as an agent of NGL, can answer any questions. Forest Lawn Mortuary, licensed as Forest Lawn Memorial-Parks & Mortuaries and Douglass & Zook Funeral and Cremation Services, is an agent of NGL. National Guardian Life Insurance Company is not affiliated with The Guardian Life Insurance Company of America, aka The Guardian or Guardian Life.',
      formDisclaimer: `  We respect your privacy and will not sell your personal information. By clicking AGREE AND SUBMIT,
        you agree that Forest Lawn will collect and use the information you provide here to periodically email,
        call or text you with information about products, services, and events according to the terms of the
        Forest Lawn <a class="green-font" href="https://forestlawn.com/privacy/" target="_blank"><strong>Privacy Policy and Terms of Use </strong></a>
        until you change your communication preferences at <a class="green-font" href="https://forestlawn.com/preferences" target="_blank"><strong>https://forestlawn.com/preferences</strong></a>`,
      labels: {
        mortuary: 'Which Mortuary location are you interested in?',
        firstName: 'First Name',
        lastName: 'Last Name',
        middleName: 'Middle Name',
        name: 'Name',
        email: 'Email Address',
        phoneNumber: 'Phone Number',
        someoneCheckbox: 'Someone I love and/or care for',
        myselfCheckbox: 'Myself',
        preNeedCheckbox: 'Preplan for future needs',
        immediateNeedCheckbox: 'Immediate need',
        anticipateNeedCheckbox: 'Anticipate needing your services within 30 days',
        yourName: 'Please share with us your full legal name.',
        lovedOneName: 'Please share with us the legal name of your loved one.',
        timeOfNeed: 'Do you have an immediate need, anticipate needing our services within 30 days, or wish to preplan for future needs?',
        relation: 'How are you related to your loved one?',
        currentLocation: 'Where is your loved one currently?',
        facility: 'Facility Name',
        streetAddress: 'Street Address',
        city: 'City',
        state: 'State',
        cart: 'Summary of Cart and Services',
        funeralDetails: 'Funeral Home Details',
        funeralHome: 'Funeral Home',
        funeralDirector: 'Funeral Director',
        submittedInfo: 'Contact Information as Submitted'
      },
  },
  Spanish: {
    lang: 'sp',
    startBtn: 'Comience Ahora',
    backBtn: 'Regresar',
    submitBtn: 'ACEPTAR Y ENVIAR',
    printBtn: 'Imprimir',
    emailBtn: 'Enviarse correo electrónico a usted mismo',
    alert: 'La confirmación ha sido enviada',
    choose: 'Elija uno',
    orCallText: 'o llame al',
    contactNumber: '844-776-2653',
    contactHref: 'tel:8447762653',
    received: 'Formulario Recibido!',
    marketingHeadline: 'Comience a hacer arreglos de cremación aquí:',
    cremationPageLink: 'Haga clic aquí para aprender más acerca de la cremación en Forest Lawn del Valle de Coachella.>>',
    gplLink: 'Vea aquí todos los precios de cremación y de entierros tradicionales.>>',
    packageDisclaimer: "*No incluye el impuesto de venta ni la tarifa del Departamento de Asuntos del Consumidor. No se permiten adiciones o eliminaciones en este paquete",
    packageTitle: 'Paquete Esencial de Cremación',
    featuresHeadline: 'Este paquete incluye:',
    packageDetails: 'Detalles de los Paquetes',
    packageFeatures: `
      <li>Uso básico de servicios e instalaciones</li>
      <li>Traslado de su ser querido a nuestro cuidado (en un radio de 75 millas)</em></li>
      <li>Refrigeración</li>
      <li>Tarifa de Cremación </li>
      <li>Trámite del Certificado de Defunción</li>
      <li>Certificado de Defunción (1)</li>
      <li>Permiso (1)</li>`,
    products: {
      alternativeContainer: {
        title: 'Contenedor Alternativo (2-000)',
        description: 'Caja de cartón grueso (solamente para el uso de cremación)',
        imageSrc: container,
        price: '$58.00',
        disclaimer: 'La ley requiere el uso de un recipiente de cremación para colocar el cuerpo durante el proceso de cremación. Nuestro contenedor de cremación es una caja básica de cartón.'
      },
      urn: {
        title: 'Urna Básica de Plástico',
        description: 'Urna de Plástico',
        imageSrc: urn,
        price: '$34.00'
      }
    },
    formHeaderText: `<p>
      Las siguientes son algunas preguntas para guiarlo a través del proceso de hacer los arreglos. Si en algún momento tiene alguna pregunta, llame al <a class="phoneNumber green-font" href="tel:8447762653">844-776-2653</a> y será un honor para nosotros poder ayudarlo.
    </p>
    <h4>¿Está interesado en agregar aspectos personales y una ceremonia significativa antes o después de la cremación?</h4>
    <p>
      Estamos también aquí para ayudarle a diseñar un servicio personalizado con la familia y amigos con el que puedan rendir un tributo, compartir historias y consolarse mutuamente. Con una amplia variedad de urnas únicas, capillas y salas especiales para servicios y recepciones, le ayudaremos a organizar un recuerdo apropiado. Llame al
      <a class="phoneNumber green-font" href="tel:8447762653">844-776-2653</a>, y nosotros estaremos con usted en cada paso del camino.
    </p>`,
    arrangementRecipient: 'Hoy, quisiera hacer arreglos funerarios para:',
    insuranceDisclaimer: `La planificación de servicios funerarios es financiado a través de la compra de un seguro de vida de National Guardian Life Insurance Company, Madison, WI (NGL). Un asesor de planificación de Forest Lawn®, el cual cuenta con licencia del estado y ha sido asignado como agente de NGL, puede contestar cualquier pregunta. Forest Lawn Mortuary, licenciado como Forest Lawn Memorial-Parks & Mortuaries y como Douglass & Zook Funeral and Cremation Services, es un agente de NGL. National Guardian Life Insurance Company no está afiliada con The Guardian Life Insurance Company of America, también conocida como The Guardian o Guardian Life.`,
    formDisclaimer: `Nosotros respetamos su privacidad y no compartiremos su información. Forest Lawn recopilará y utilizará la información que proporcione aquí, para enviarle periódicamente correos electrónicos, llamarlo o enviarle mensajes de texto con información sobre productos, servicios y eventos de acuerdo con los términos de la Política de Privacidad y los Términos de Uso de Forest Lawn en www.forestlawn.com/es/privacidad hasta que usted cambie sus preferencias de comunicación en www.forestlawn.com/preferences.`,
    labels: {
      mortuary: '¿En qué localidad está usted interesado?',
      firstName: 'Primer Nombre',
      name: 'Nombre',
      lastName: 'Apellido',
      middleName: 'Segundo Nombre',
      email: 'Correo Electrónico',
      phoneNumber: 'Número de Teléfono',
      someoneCheckbox: 'Alguien a quien yo amo o está a mi cuidado',
      myselfCheckbox: 'Yo mismo',
      preNeedCheckbox: 'Pre-planificar para necesidades en el futuro',
      immediateNeedCheckbox: 'Necesidad Inmediata',
      anticipateNeedCheckbox: 'Anticipar la necesidad de servicios dentro de 30 días',
      yourName: 'Comparta con nosotros su nombre legal completo.',
      lovedOneName: 'Por favor comparta con nosotros el nombre legal de su ser querido.',
      timeOfNeed: '¿Tiene una necesidad inmediata, anticipa la necesidad de nuestros servicios dentro de 30 días o desea planificar con anticipación las necesidades futuras?',
      relation: '¿Cuál es su relación con su ser querido?',
      currentLocation: '¿Dónde se encuentra su ser querido?',
      facility: 'Nombre del Lugar/Centro',
      streetAddress: 'Dirección',
      city: 'Ciudad',
      state: 'Estado',
      cart: 'Resumen de carrito de compras y servicios',
      funeralDetails: 'Detalles de la Funeraria',
      funeralHome: 'Funeraria',
      funeralDirector: 'Director Funerario',
      submittedInfo: 'Información de contacto como fue enviada'
    },
  }
}


class MainPage extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      step: 1,
      clientEmail: '',
      atNeed: '',
      lovedOne: {
        fname: ' ',
        mname: ' ',
        lname: ' '
      }
    }
  }


  componentDidMount() {
    //Retrieve the current page language from the cookies
    // const pageLanguage = document.cookie
    //   .split('; ')
    //   .find(row => row.startsWith('language='))
    //   .split('=')[1];
    //   this.setState({
    //     ...this.state,
    //     language: pageLanguage
    //   })

  }


  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  }

  getEmail = (data) => {
    this.setState({
      clientEmail: data
    })
  }

  atNeedStatus = (status) => {
    this.setState({
      atNeed: status
    })
  }

  getClient = (data) => {
    this.setState({
      ...this.state,
      client: {
        fname: data.firstName,
        mname: data.middleName,
        lname: data.lastName
      }
    })
  }

  getLovedOne = (data) => {
    this.setState({
      lovedOne: {
        fname: data.firstName,
        mname: data.middleName,
        lname: data.lastName
      }
    })
  }



  render(){

      console.log($("html").attr("lang"));
      let language;

      //set the content based on browser language
      const pageLanguage = $("html").attr("lang");
      pageLanguage === 'es-ES'
      ? language = content.Spanish
      : language = content.English

    const {step} = this.state;
    switch(step) {
      case 1:
          return <Package
                  nextStep={this.nextStep}
                  chosenLanguage={language}
                  />

      case 2:
          return <Form
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  email={this.getEmail}
                  atNeed={this.atNeedStatus}
                  clientName={this.getClient}
                  lovedOneName={this.getLovedOne}
                  chosenLanguage={language}
                  selectData={data}
                />

      case 3:
          return <Confirmation
                  email={this.state.clientEmail}
                  atNeedStatus={this.state.atNeed}
                  client={this.state.client}
                  lovedOne={this.state.lovedOne}
                  chosenLanguage={language}
                />

      default:
    }
  }
}

export default MainPage;
