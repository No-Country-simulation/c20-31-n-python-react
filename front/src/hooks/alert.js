import Swal from 'sweetalert2';

export const AddAlert = (title, text, icon) => {
  const alerta = Swal.fire({
    title: `${title}`,
    text: `${text}`,
    icon: `${icon}`,
  });
  return { alerta };
};
