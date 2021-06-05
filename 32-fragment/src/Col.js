function Col(){
    return(
        // wrong way gives error -  <td> cannot appear as a child of <div> and <div> cannot appear as a child of <tr>
        // <div>
        //     <td>Tommy</td>
        //     <td>Grace</td>
        // </div>

        // right way with fragment <></>
        <>
            <td>Tommy</td>
            <td>Grace</td>
        </>
    )
}

export default Col;