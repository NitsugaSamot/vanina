import { Form, Input, Button } from "antd";
import { motion } from "framer-motion";
import "./stylesContacto.css";

export default function Contacto() {
//   const onFinish = (values: any) => {
//     console.log("Formulario enviado:", values);
//   };

  return (
    <>
    <h1>..</h1>
    <h1>..</h1>
    <h1>..</h1>
    <motion.section
      className="contacto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >

      <h1>Contacto</h1>
      <p>¿Tienes un proyecto o una idea? Envía un mensaje</p>
      
      <Form layout="vertical" className="contact-form">
        <Form.Item label="Nombre Completo" name="nombre" rules={[{ required: true, message: "Por favor ingresa tu nombre" }]}>
          <Input placeholder="Ej: Juan Pérez" />
        </Form.Item>

        <Form.Item label="Email" name="email" rules={[{ required: true, type: "email", message: "Ingresa un email válido" }]}>
          <Input placeholder="Ej: correo@ejemplo.com" />
        </Form.Item>

        <Form.Item label="Teléfono" name="telefono" rules={[{ required: true, message: "Por favor ingresa tu número de contacto" }]}>
          <Input placeholder="Ej: +54 9 11 1234-5678" />
        </Form.Item>

        <Form.Item label="Mensaje" name="mensaje" rules={[{ required: true, message: "Escribe un mensaje" }]}>
          <Input.TextArea rows={4} placeholder="Escribe tu mensaje aquí..." />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="submit-button">
            Enviar Mensaje
          </Button>
        </Form.Item>
      </Form>
    </motion.section>
    </>
  );
}
