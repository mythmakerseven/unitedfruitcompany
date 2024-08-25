import { useRef } from "react";
import { FullScreenContainer, FullScreenContent, CloseButton } from "./styles";
import Image from "../Image";
import { XLg } from "react-bootstrap-icons";
import { useEffect } from "react";

interface Props {
  image: string;
  alt: string;
  showCloserLook: boolean;
  setCloserLook: (arg: boolean) => void;
}

const CloserLook: React.FC<Props> = ({
  image,
  alt,
  showCloserLook,
  setCloserLook,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (showCloserLook) {
      closeButtonRef.current?.focus();
    }
  }, [showCloserLook]);

  return (
    <FullScreenContainer onClick={() => setCloserLook(false)}>
      <FullScreenContent>
        {/* Button included for a11y reasons */}
        <CloseButton
          onClick={() => setCloserLook(false)}
          tabIndex={0}
          ref={closeButtonRef}
        >
          <XLg />
        </CloseButton>
        <Image src={image} alt={alt} />
      </FullScreenContent>
    </FullScreenContainer>
  );
};

export default CloserLook;
