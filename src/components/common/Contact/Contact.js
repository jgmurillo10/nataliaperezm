import React, {useState} from 'react';
import { Section, Container } from '@components/global';
import emailjs from 'emailjs-com';
import styled from 'styled-components';

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState();
  const handleSubmit = (e) => {
    setStatus("");
    e.preventDefault();
    
    emailjs.sendForm('service_r0k1qry', 'template_jlsc5bs', e.target, 'user_V0OlSoRrl1zQsDyIoIFbb')
    .then((result) => {
        setStatus('Mensaje enviado exitosamente.');
        setSuccess(true);
      }, (error) => {
        setStatus('Hubo un error enviando el mensaje. Inténtalo de nuevo por favor.');
    });
  }

  return (
    <Section>
      <Container>
        <h2>Contacto</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="fname">Nombres</label>
          <input type="text" id="fname" name="from_name" placeholder="Coco Pérez" value={name} onChange={(e) => setName(e.target.value)} required/>
          
          <label htmlFor="from_mail">Correo electrónico</label>
          <input type="email" id="from_mail" name="from_mail" placeholder="coco.perez@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          
          <label htmlFor="from_phone">Número de teléfono</label>
          <input type="number" id="from_phone" min={3000000000} max={3999999999} name="from_phone" placeholder="3046993910" value={phone} onChange={(e) => setPhone(e.target.value)} required/>

          <label htmlFor="message">Asunto</label>
          <textarea id="message" name="message" placeholder="Necesito asesoría en..." style={{height: 200}} value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>

          <input type="submit" value="Contactar" disabled={success}/>

          { status && <ErrorMessage>{status}</ErrorMessage>}
        </form>
      </Container>
    </Section>
  )
};

const ErrorMessage = styled.p`
  margin-top: 12px;
  font-size: 14px;
`;

export default Contact;
    