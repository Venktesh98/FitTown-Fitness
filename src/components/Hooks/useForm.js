export const useForm = () => {};

export const Form = ({ children, ...rest }) => {
  return <form {...rest}>{children}</form>;
};
