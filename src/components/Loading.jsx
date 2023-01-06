import { FallingLines } from 'react-loader-spinner';
import { FallingLinesStyled } from 'components/GlobalStyles';

export const Loading = () => {
  return (
    <div
      style={{ justifyContent: 'center' , display: 'flex'}}
    >
      <FallingLines {...FallingLinesStyled} />
    </div>
  );
};