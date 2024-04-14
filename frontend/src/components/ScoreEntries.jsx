import { Box, useTheme } from "@mui/material"
import { tokens } from "../theme"
import ScoreEntry from "./ScoreEntry";

const ScoreEntries = props => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    var index = 0
    var coopIDList = []

    return <div flexdirection="column" justifycontent="flex-start">
        {
            props.changelogData.map(submission => {

                if (!coopIDList.includes(submission.coop_id) || submission.coop_id === null){
                index++
                coopIDList.push(submission.coop_id)

                return <Box
                display="flex"
                flexdirection="column"
                style={{
                    backgroundcolor:
                      index % 2 === 0
                        ? colors.gray[700]
                        : colors.gray[600]
                  }}
                >
                    <ScoreEntry submission={submission}/>
                </Box>
                }
                else {
                    return <Box></Box>
                }
            })
        }
    </div>
}

export default ScoreEntries