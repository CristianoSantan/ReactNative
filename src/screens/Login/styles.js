import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    height: "100vh"
    // height: Platform.OS === "web" ? "100vh" : "100%"
  },
  cor: {
    fontSize: 50,
    color: '#7b42f5',
  },
  bold: {
    fontSize: 50,
    fontWeight: "bold",
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  input: {
    margin: 10,
    padding: 20,
    width: "100%",
    height: 40,
    backgroundColor: "#fff",
    fontSize: 15,
    borderRadius: 20,
  },
  btnCadastro: {
    margin: 10,
    width: '100%',
    height: 40,
    backgroundColor: '#7b42f5',
    borderRadius: 20,
    justifyContent: 'center'
  }
});

export default styles;