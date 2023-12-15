type WritingModalProps = {
  confirmDelete: () => void;
};
const WritingModal = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <h2 className="text-2xl">Börja skriva</h2>
      <input></input>
    </section>
  );
};

export default WritingModal;
