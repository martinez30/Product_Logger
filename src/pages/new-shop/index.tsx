import { Input } from "@/components/Input";
import { ApiService } from "@/services/ApiService";
import { Button, Card } from "@nextui-org/react";
import { Formik, FormikValues } from "formik";
import { CSSProperties } from "react";
import { useQuery } from "react-query";
import ReactSelect from "react-select";
import { schema } from "./validator";

interface StyleMap {
    [key: string]: CSSProperties;
}

export default function NewShop() {
    const api = ApiService.getInstance();
    const { data: markets, isLoading } = useQuery("markets", async () => await api.getMarkets(), { select(data) { return data.map(market => ({ value: market.id, label: market.name })) }, })

    const submit = (values: FormikValues) => {
        console.log("Validate: ", JSON.stringify(values))
    }

    const classes: StyleMap = {
        form: {
            marginTop: "20px",
            display: "grid",
            gridTemplate: "1fr 1fr 1fr 1fr / 1fr 1fr 1fr 1fr / 4fr",
            gap: "20px"
        },
        submitButton: {
            gridColumn: "3 / 4",
            float: "right"
        }
    }

    return (
        <section>
            <Formik
                initialValues={{}}
                onSubmit={submit}
                validationSchema={schema}
                isInitialValid={false}
            >
                {({ handleSubmit, isValid }) => (
                    <Card css={{ maxWidth: "90%", margin: "0 auto", padding: "0 20px" }}>
                        <Card.Body>
                            <h3>Nova Compra</h3>
                            <form onSubmit={handleSubmit} style={classes.form}>
                                <Input name="market" as="SELECT_CREATABLE" options={markets} handleCreateOption={async (value) => await api.createMarket(value)} />
                                
                                <Button type="submit" shadow disabled={!isValid} css={{ float: "right", display: "block", }}>Salvar</Button>
                            </form>
                        </Card.Body>
                    </Card>
                )}
            </Formik>
        </section>
    )
}