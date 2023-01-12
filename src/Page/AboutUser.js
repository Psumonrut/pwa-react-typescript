import { React, useState, useEffect, useContext, useCallback, useMemo, memo } from "react";
import { Button, Card, CardContent, TextField } from '@mui/material';
const AboutUser = () => {
    const [dataAdd, setDataAdd] = useState({})

    const onChangeText = (e, names) => {
        if (e.target.value) {
            dataAdd[names] = e.target.value
        }
    }

    const onCLickRegster = () => {
        console.log(dataAdd)
    }

    return (
        <div style={{ marginLeft: "40%", marginTop: "5%" }}>
            <Card style={{ width: "50%" }}>
                <CardContent>
                    <p>REGISTER</p>
                    <div><TextField variant="standard" label="Email" onChange={(e) => onChangeText(e, 'email')} /></div>
                    <Button style={{ marginTop: "10%" }} variant="contained" onClick={() => onCLickRegster()}>Register</Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default memo(AboutUser);