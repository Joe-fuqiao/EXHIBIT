import React from "react";

import { withStyles } from "@material-ui/styles";
import { Tooltip } from "antd";
import { FormattedMessage } from "react-intl";

export interface DetailsProps {
  classes: any;
  location: any;
}

const styles: any = (theme: any) => ({
  root: {
    margin: "20px",
    backgroundColor: "#FFFFFF",
    padding: "30px 20px"
  },
  title: {
    fontSize: "16px",
    color: "#33353D"
  },
  table: {
    width: "100%",
    "& tr": {
      height: "54px"
    },
    "& td": {
      border: "1px solid rgba(204,204,204,1)",
      height: "54px",
      lineHeight: "54px",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
      fontSize: "14px",
    },
    "& .lable": {
      width: "11%",
      backgroundColor: "rgba(250,250,252,1)",
      padding: "0 10px",
      color: "#33353D",      
    },
    "& .value": {
      width: "22.33%",
      padding: "0 20px",
      color: "#5E616F",
    },
  },
});

class Details extends React.Component<DetailsProps, any> {
  constructor(props: Readonly<DetailsProps>) {
    super(props);
    this.state = {
      item: null,

    };
  }

  componentWillMount() {
    const { location } = this.props;
    if (location.state) {
      sessionStorage.setItem("logItem", JSON.stringify(location.state.item));
    }
    let logItem : any = sessionStorage.getItem("logItem");
    logItem = JSON.parse(logItem);
    this.setState({
      item: logItem
    });
  }

  render () {
    const { classes } = this.props;
    const { item } = this.state;

    return (
      <div className={classes.root}>
        <p className={classes.title}>
          <FormattedMessage
            id="user.detail.basicInformation"
            defaultMessage="Basic information"
          />
        </p>

        <table className={classes.table}>
          <tbody>
            <tr>
              <td className="lable"><FormattedMessage id="log.userName" defaultMessage="User name"/></td>
              <td className="value"><Tooltip title={item.userName}>{item.userName}</Tooltip></td>
              <td className="lable"><FormattedMessage id="log.userId" defaultMessage="User ID"/></td>
              <td className="value"><Tooltip title={item.userId}>{item.userId}</Tooltip></td>
              <td className="lable"><FormattedMessage id="log.userAccount" defaultMessage="User account"/></td>
              <td className="value"><Tooltip title={item.account}>{item.account}</Tooltip></td>
            </tr>

            <tr>
              <td className="lable"><FormattedMessage id="log.userOperationTime" defaultMessage="User Operation Time" /></td>
              <td className="value"><Tooltip title={item.createdAt}>{item.createdAt}</Tooltip></td>
              <td className="lable"><FormattedMessage id="log.systemAbbreviation" defaultMessage="System abbreviation"/></td>
              <td className="value"><Tooltip title={item.identifier}>{item.identifier}</Tooltip></td>
              <td className="lable"><FormattedMessage id="log.instructions" defaultMessage="Instructions"/></td>
              <td className="value"><Tooltip title={item.operation}>{item.operation}</Tooltip></td>
            </tr>

            <tr>
              <td className="lable"><FormattedMessage id="log.requestMethod" defaultMessage="Request Method" /></td>
              <td className="value"><Tooltip title={item.method}>{item.method}</Tooltip></td>
              <td className="lable"><FormattedMessage id="log.chineseNameOfTheSystem" defaultMessage="Chinese Name Of The System"/></td>
              <td className="value" colSpan={3}><Tooltip title={item.systemName}>{item.systemName}</Tooltip></td>
            </tr>

            <tr>
              <td className="lable"><FormattedMessage id="log.requestFullPath" defaultMessage="Request Full Path"/></td>
              <td className="value" colSpan={5}><Tooltip title={item.api}>{item.api}</Tooltip></td>
            </tr>

          </tbody>
        </table>

      </div>
    )
  }

}

export default withStyles(styles)(Details);
  

