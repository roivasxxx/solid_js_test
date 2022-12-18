import Matrix from "../components/Matrix";
import MatrixComponent from "../components/MatrixComponent";
import PageTemplate from "./PageTemplate";

const Articulations = () => {
  return (
    <PageTemplate>
      <Matrix matrixType="adjacency" />
    </PageTemplate>
  );
};
export default Articulations;
