import loading from "./loading.svg";
import { LoadingGif, Center } from "./style";

const Loading = () => {
  return (
    <Center>
      <LoadingGif src={loading} alt="Carregando..." />
    </Center>
  );
};

export default Loading;
