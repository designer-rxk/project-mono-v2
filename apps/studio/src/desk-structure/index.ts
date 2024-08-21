import { StructureBuilder } from "sanity/structure";

const deskStructure = (S: StructureBuilder) => S.list().title("Content");

export default deskStructure;
