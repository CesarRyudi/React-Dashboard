import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import  SearchIcon from "@mui/icons-material/Search";
 
const initialValues = {
    nome: "",
    cep: "",
    cidade: "",
    estado: "",
    logradouro: "",
    numero: "",
};

const cepReg = /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/gm


const userSchema = yup.object().shape({
    nome: yup.string().required("Obrigatório"),
    cep: yup.string().matches(cepReg, "Formato de CEP inválido").required("Obrigatório"),
    cidade: yup.string().required("Obrigatório"),
    estado: yup.string().required("Obrigatório"),
    logradouro: yup.string().required("Obrigatório"),
    numero: yup.string().required("Obrigatório"),
});


const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = (values) => {
        console.log(values);

        const dataToSend = JSON.stringify(values);
        // fetch(, {
            fetch('https://echo.zuplo.io/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: dataToSend
            })
            .then(response => response.json())
            .then(response => console.log(JSON.stringify(response)))
            
    }

    return (
        <Box m="20px">
            <Header title="CADASTRO" subtitle="Cadastre um novo local"/>
        
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={userSchema}
          >
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <Box 
                     display="grid" 
                     gap="15px" 
                     gridTemplateColumns="repeat(16, minmax(0, 1fr))"
                     sx={{
                        "& > div": {gridColumn: isNonMobile ?undefined : "span 4"},
                     }}
                     >
                        <TextField 
                         fullWidth
                         gap="2px"
                         variant="filled"
                         type="text"
                         label="Nome do Local (Apelido)"
                         onBlur={handleBlur}
                         onChange={handleChange}
                         value={values.nome}
                         name="nome"
                         error={!!touched.nome && !!errors.nome}
                         helperText={touched.nome && errors.nome}
                         sx={{ gridColumn: "span 16"}}
                         />
                         
                        <TextField 
                         gap="2px"
                         fullWidth
                         variant="filled"
                         type="text"
                         label="CEP"
                         onBlur={handleBlur}
                         onChange={handleChange}
                         value={values.cep}
                         name="cep"
                         error={!!touched.cep && !!errors.cep}
                         helperText={touched.cep && errors.cep}
                         sx={{ gridColumn: "span 5"}}
                         />

                         <Button 
                         type="button"  
                         color="secondary" 
                         variant = "contained"
                         sx={{ gridColumn: "span 1", margin:"0px 0px 0px -10px", height:"56px"}}
                         >
                          <SearchIcon />  
                        </Button>

                        <TextField 
                         fullWidth
                         variant="filled"
                         type="text"
                         label="Cidade"
                         onBlur={handleBlur}
                         onChange={handleChange}
                         value={values.cidade}
                         name="cidade"
                         error={!!touched.cidade && !!errors.cidade}
                         helperText={touched.cidade && errors.cidade}
                         sx={{ gridColumn: "span 8"}}
                         />
                         
                        <TextField 
                         fullWidth
                         variant="filled"
                         type="text"
                         label="UF"
                         onBlur={handleBlur}
                         onChange={handleChange}
                         value={values.estado}
                         name="estado"
                         error={!!touched.estado && !!errors.estado}
                         helperText={touched.estado && errors.estado}
                         sx={{ gridColumn: "span 2"}}
                         />

                         <TextField 
                         fullWidth
                         variant="filled"
                         type="text"
                         label="Logradouro"
                         onBlur={handleBlur}
                         onChange={handleChange}
                         value={values.logradouro}
                         name="logradouro"
                         error={!!touched.logradouro && !!errors.logradouro}
                         helperText={touched.logradouro && errors.logradouro}
                         sx={{ gridColumn: "span 10"}}
                         />

                         <TextField 
                         fullWidth
                         variant="filled"
                         type="text"
                         label="Número"
                         onBlur={handleBlur}
                         onChange={handleChange}
                         value={values.numero}
                         name="numero"
                         error={!!touched.numero && !!errors.numero}
                         helperText={touched.numero && errors.numero}
                         sx={{ gridColumn: "span 6"}}
                         />

                         
                    </Box>
                        <Box 
                        mt="20px"
                         display="flex" 
                         justifyContent="end" >
                        <Button type="submit"  color="secondary" variant = "contained">
                            Cadastrar Local
                        </Button>

                    </Box>
                    
                </form>
            )}

        </Formik>

        </Box>
    )

};

export default Form;
