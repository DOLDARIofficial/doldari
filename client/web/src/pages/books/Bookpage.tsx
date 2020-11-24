import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import Appbar from '../../shared/Appbar';
import GridTool from '../../organisms/books/Contents'
import React from 'react'
import PaginationLink from '../../organisms/books/Bookpagenation'

export default function Books(): JSX.Element{
    return(
    <div style={{paddingRight : 100, paddingLeft : 100, paddingTop:150, paddingBottom:100, color:'primary', justifyContent: "center", alignItems: "center"}}>
     <Appbar/>
        <Paper variant="outlined">
            <Grid container spacing={3} style={{alignContent:'center'} } >
                <GridTool/><GridTool/><GridTool/><GridTool/>
            </Grid>
        </Paper>
    <Grid container style={{paddingRight : 200, paddingLeft : 470, paddingTop: 20}}>
        <PaginationLink/>
    </Grid>
     </div>
  )
}