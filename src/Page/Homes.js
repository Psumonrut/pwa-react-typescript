import { React, useState, useEffect, useContext, useCallback, useMemo, memo } from "react";
import { Button, Card, CardContent, TextField } from '@mui/material';
import { DBConfig } from '../DataConfig/DBConfig'
import { useIndexedDB, AccessDB, initDB } from 'react-indexed-db';

const Homes = () => {
    const { getAll ,add } = useIndexedDB('employee');
    //const DataConfig = initDB(DBConfig);
    const [dataAdd, setDataAdd] = useState({})

    useEffect(() => {
        getDataAll()
    }, [])

    const getDataAll = () => {
        getAll().then(data => {
            console.log(data)
        });
    }

    const onChangeText = (e, names) => {
        if (e.target.value) {
            dataAdd[names] = e.target.value
        }
    }

    const onCLickAdd = () => {
        //window.location = `/regis`
        console.log(dataAdd)
        add(dataAdd).then(
            event => {
                console.log('ID Generated: ', event.target.result);
            },
            error => {
                console.log(error);
            }
        );
    }

    return (
     <>
          <div style={{ marginLeft: "40%", marginTop: "5%" }}>
            <Card style={{ width:"50%" }}>
                <CardContent>
                    <p>PWA PROJECT</p>
                    <div><TextField variant="standard" label="Name" onChange={(e) => onChangeText(e, 'name')} /></div>
                    <div><TextField variant="standard" label="LastName" onChange={(e) => onChangeText(e, 'lastname')} /></div>
                    <div><TextField variant="standard" label="Age" onChange={(e) => onChangeText(e, 'age')} /></div>
                    <Button style={{ marginTop:"10%" }} variant="contained" onClick={() => onCLickAdd()}>ADD</Button>
                </CardContent>
            </Card>
          </div>
     </>
        )
}

export default memo(Homes);