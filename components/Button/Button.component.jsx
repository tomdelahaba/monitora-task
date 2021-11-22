import {
  IconWrapper,
  IconImg,
  ButtonWrapper,
  SpanWrapper,
} from "./Button.styles";

const Button = (props) => {
  return (
    <ButtonWrapper as='a' onClick={props.handleClick} className={props.cName}>
      <IconWrapper>
        <IconImg src={props.icon} alt='SVG icon' />
      </IconWrapper>
      <SpanWrapper> {props.children} </SpanWrapper>
    </ButtonWrapper>
  );
};

export default Button;
