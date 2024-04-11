import { useState } from 'react';
import { Navbar } from "../app/components/ui/navbar";
import Landing from "../app/landing";
import ModalComponent from "../app/modal";

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <Navbar />
      <Landing />

    </>
  );
}
