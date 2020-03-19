import styled from 'styled-components/native';
import { ninjaIcon } from '../../../assets';

export default styled.Image.attrs(props => ({
  source: ninjaIcon,
}))`
  width: 30%;
  height: 30%;
  resize-mode: contain;
`;
