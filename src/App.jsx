import React, { useState } from 'react';
import Homepage from './components/Homepage';
import FormModal from './components/FormModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Homepage onOpenModal={() => setIsModalOpen(true)} />
      {isModalOpen && <FormModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

export default App;
