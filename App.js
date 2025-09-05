import React, { useStaTE } from 'react';
import { SafeSAreaView, View, Text, TouchableOpacity, StyleSheet, ScrollView, Textinput, Alert, TextInput } from 'react-native';


export default function App() {

  const [pagina, setPagina] = useState('Home');

return (
  <SafeAreaView style={StyleSheet.container}>
    <Header pagina={pagina} setPagina={setPagina} />
    <ScrollView contentContainerStyle={style.content}>
      {pagina === 'home' && <Home />}
      {pagina === 'sobre' && <Sobre />}
      {pagina === 'serviços' && <Servicos />}
      {pagina === 'contato' && <Contato />}
    </ScrollView>
    <Footer />
    </SafeAreaView>
);

}


function Header({ pagina, setPagina}) {
  return (
    <View style={style.header}>
      <Text style={style.headerTitle}>Minha empresa</Text>
    </View style={style.nav}>
    {['home', 'sobre', 'servicos', 'contato'].map((p) => (
      <TouchableOpacity
      key={p}
      style={[style.navButtonText, pagina === p && StyleSheet.navButtonActive]}
      onPress={() => setpagina(p)}
      >
        <Text style={style.navButtonText}>{p.charAt(0).toUpperCase() + p.Slice(1)}</Text>
      </TouchableOpacity>
    ))}
    </View>
    </View>
  )
}

function Home() {
  return (
    <View style={style.section}>
      <Text style={StyleSheet.title}>Bem-vindo a nossa  empresa</Text>
      <text>Somos líderes em soluções tecnológicas para o seu negócio.</text>
    </View>
  );
}

function Sobre() {
  return (
    <View style={style.section}>
      <Text style={StyleSheet.title}>Sobre nós</Text>
      <Text>Fundada em 2010, temos o compromisso de qualidade e inovação.</Text>
    </View>
  );
}

function Serviços() {
  return (
    <View style={style.section}>
      <Text style={style.title}>Nossos Serviços</Text>
      <Text>-Consultoria em TI</Text>
      <Text>-Suporte tecnico</Text>
    </View>
  );
}

function Contato() {
  const [nome, setNome] = React.useState('');
  const [email,setEmail] = React.useState('');
  const [mensagem, setMensagem, setmensagem] = React.useState('');

  function enviar() {
    if (!nome || !email || !mensagem) {
      Alert.alert('Erro', 'Por favor preencha todos os campos');
      return;
    }
    Alert.alert('Mensagem enviada',Obrigado, ${nome}! Retornaremos em breve.) ;
    setNome('');
    setEmail('');
    setMensagem('');
  }

  return (
   <View style={StyleSheet.section}>
    <Text style={StyleSheet.title}>Contato</Text>
    <TextInput
     style={StyleSheet.input}
     placeholder="Nome"
     value={nome}
     onChangeText={setNome}
     />
     <TextInput
     style={Style.input}
     placeholderlder="Email"
     value={email}
     onChangeText={setEmail}
     keyboardType="email-address"
     />
     <TextInput
     style={[styles.input, {height: 100}]}
     placeholder="Mensagem"
     value={mensagem}
     onChangeText={setMensagem}
     multiline
     />
     <TouchableOpacity style={styles.button} onPress={enviar}>
       <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
 
  );
}

function footer() {
  return (
    <View style={styles.footer}>
      <Text style={{color: 'White'}}>
        2025 Minha Empresa
        Todos os direitos reservados.
        </Text>
      </View>
  );
}

const style= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'f4f7fa'
  },
  header: {
    backgroundColor: '#004080',
    padding: 40,
    alignContent: 'center' ,
    alignContent: 'center'
},
headerTitle: {
  color: 'white',
  fontWeight: 'condensedBold',
  fontSize: 24,
  fontWeight: 12
},
nav: {
  flexDirection: 'row',
  justifyContent: 'space-around'
},
navButton: {
  paddingVertical: 8,
  paddingHorizontal: 12,
  borderRadius: 4
},
navButtonActive: {
  backgroundColor: '#0066cc'
},
navButtonText: {
  color: 'white',
  fontWeight: 'bold'
},
content: { padding: 20, flexGrow; 1},
section: { marginBottom: 20 },
title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10},
input: {
  backgroundColor: 'white',
  borderColor: '#ccc',
  borderWidth: 1,
  paddingHorizontal: 10,
  paddingVertical: 8,
  borderRadius: 4,
  marginBottom: 15,
},
button: {
  backgroundColor: '#004080',
  paddingVertical: 12,
  borderRadius: 6,
  alignItems: 'center',
},
buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
footer: { backgroundColor: '#00264d', padding: 15, alignItems: 'center' },
});
