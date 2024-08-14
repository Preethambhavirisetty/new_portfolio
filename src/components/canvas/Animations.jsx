import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import graphData from './graph.json'; // Adjust the import according to the actual file path

const Animation = () => {
  const svgRef = useRef();

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const links = graphData.links.map(d => ({ ...d }));
    const nodes = graphData.nodes.map(d => ({ ...d }));

    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id).distance(60)) // Set link distance
      .force("charge", d3.forceManyBody().strength(-70)) // Adjust force strength
      .force("center", d3.forceCenter(width/2, height/1.7)) // Center the graph
      .force("x", d3.forceX().strength(0.1))
      .force("y", d3.forceY().strength(0.1));

    const svg = d3.select(svgRef.current)
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("viewBox", [0, 0, width, height].join(' ')) // Set the viewBox to match screen size
      .style("position", "absolute")
      .style("top", 0)
      .style("left", 0)
      .style("background-color", "transparent")
      .style("margin", 0)
      .style("padding", 10);
    // const paddingTop = 1000;

    // svg.selectAll('*')
    //   .attr("transform", `translate(0, 100)`);

    const link = svg.append("g")
      .attr("stroke", "white")
      .attr("stroke-opacity", 0.9)
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke-width", d => Math.sqrt(d.value));

    const node = svg.append("g")
      .attr("stroke", "yellow")
      .attr("stroke-width", 0.4)
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", d => d.radius) // Increase node radius for better visibility
      .attr("fill", d => "#fcd54d");

    node.append("title")
      .text(d => d.id);

    node.call(d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended));

    simulation.on("tick", () => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);
    });

    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return () => {
      simulation.stop();
    };
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default Animation;
