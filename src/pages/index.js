import React from "react";
import Container from "@material-ui/core/Container";

import Header from "../components/Header";
import ValueMarketChart from "../components/ValueMarketChart";
import SummaryCard from "../components/SummaryCard";
import ValueBrandChart from "../components/ValueBrandChart";
import TopProjects from "../components/TopProjects";

export default function App({ data }) {
  const dataValueMarket = data.allProjectsXlsxValueMarket.edges.map(
    item => item.node
  );
  const dataValueStatus = data.allProjectsXlsxValueStatus.edges.map(
    item => item.node
  );
  const dataValueBrand = data.allProjectsXlsxValueBrand.edges.map(
    item => item.node
  );
  const topProjects = data.allProjectsXlsxTopProjects.edges.map(
    item => item.node
  );

  return (
    <Container maxWidth="lg">
      <Header />
      <SummaryCard dataValueStatus={dataValueStatus} />
      <ValueMarketChart dataValueMarket={dataValueMarket} />
      <ValueBrandChart dataValueBrand={dataValueBrand} />
      <TopProjects topProjects={topProjects} />
    </Container>
  );
}

export const IndexQuery = graphql`
  query {
    allProjectsXlsxValueMarket {
      edges {
        node {
          id
          Market
          Deployed
          Discovery
          In_Progress
          On_Hold
          Backlog
          Not_Supported
        }
      }
    }
    allProjectsXlsxValueStatus {
      edges {
        node {
          id
          Status
          Total
        }
      }
    }
    allProjectsXlsxValueBrand {
      edges {
        node {
          id
          Brand
          Deployed
          Discovery
          In_Progress
          On_Hold
          Not_Supported
          OGS
          Backlog
        }
      }
    }
    allProjectsXlsxTopProjects {
      edges {
        node {
          id
          GitHub__
          Title
          Status
          Total_FY_Benefits
          Project_Manager
          Developer
          Brand
          Estimate_MVP_date
        }
      }
    }
  }
`;
