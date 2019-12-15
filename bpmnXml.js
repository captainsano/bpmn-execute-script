module.exports = {
  MOVIE_BOOKING_SCRIPT_TASK: `
<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1caku5x" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="3.5.0">
  <bpmn:process id="Process_01q7ylb" isExecutable="true">
    <bpmn:startEvent id="StartEvent_1">
      <bpmn:outgoing>SequenceFlow_0jefruw</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:userTask id="SelectMovie" name="Select Movie">
      <bpmn:incoming>SequenceFlow_1d9k73x</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_0mfinw0</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:userTask id="SelectSeats" name="Select Seats">
      <bpmn:incoming>SequenceFlow_0yawdlr</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_1kthr50</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:userTask id="SelectPaymentMethod" name="Select Payment Method">
      <bpmn:incoming>SequenceFlow_1kthr50</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_0nsrnox</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:endEvent id="EndEvent_1">
      <bpmn:incoming>SequenceFlow_0jilx9k</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="SequenceFlow_1kthr50" sourceRef="SelectSeats" targetRef="SelectPaymentMethod" />
    <bpmn:sequenceFlow id="SequenceFlow_0mfinw0" sourceRef="SelectMovie" targetRef="SelectShowtime" />
    <bpmn:userTask id="SelectShowtime" name="Select Showtime">
      <bpmn:incoming>SequenceFlow_0mfinw0</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_0yawdlr</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="SequenceFlow_0nsrnox" sourceRef="SelectPaymentMethod" targetRef="IntermediateThrowEvent_0or2gkm" />
    <bpmn:intermediateCatchEvent id="IntermediateThrowEvent_0or2gkm">
      <bpmn:incoming>SequenceFlow_0nsrnox</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_0jilx9k</bpmn:outgoing>
      <bpmn:timerEventDefinition>
        <bpmn:timeDuration xsi:type="bpmn:tFormalExpression">PT5S</bpmn:timeDuration>
      </bpmn:timerEventDefinition>
    </bpmn:intermediateCatchEvent>
    <bpmn:sequenceFlow id="SequenceFlow_0jilx9k" sourceRef="IntermediateThrowEvent_0or2gkm" targetRef="EndEvent_1" />
    <bpmn:sequenceFlow id="SequenceFlow_0yawdlr" sourceRef="SelectShowtime" targetRef="SelectSeats" />
    <bpmn:scriptTask id="Task_0ea0spx" name="My Custom Service Script">
      <bpmn:incoming>SequenceFlow_0jefruw</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_1d9k73x</bpmn:outgoing>
      <bpmn:script>console.log('Hello world');
const service = getService('myCustomService');
console.log(service);
if (service) {
  service.hello();
}
</bpmn:script>
    </bpmn:scriptTask>
    <bpmn:sequenceFlow id="SequenceFlow_1d9k73x" sourceRef="Task_0ea0spx" targetRef="SelectMovie" />
    <bpmn:sequenceFlow id="SequenceFlow_0jefruw" sourceRef="StartEvent_1" targetRef="Task_0ea0spx" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_01q7ylb">
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="179" y="99" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="UserTask_0q5c1mx_di" bpmnElement="SelectMovie">
        <dc:Bounds x="320" y="77" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="UserTask_1fyfnqz_di" bpmnElement="SelectSeats">
        <dc:Bounds x="740" y="77" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="UserTask_1pkciuk_di" bpmnElement="SelectPaymentMethod">
        <dc:Bounds x="950" y="77" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_0ie8v08_di" bpmnElement="EndEvent_1">
        <dc:Bounds x="1162" y="99" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_1kthr50_di" bpmnElement="SequenceFlow_1kthr50">
        <di:waypoint x="840" y="117" />
        <di:waypoint x="950" y="117" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0mfinw0_di" bpmnElement="SequenceFlow_0mfinw0">
        <di:waypoint x="420" y="117" />
        <di:waypoint x="530" y="117" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="UserTask_033ahyr_di" bpmnElement="SelectShowtime">
        <dc:Bounds x="530" y="77" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_0nsrnox_di" bpmnElement="SequenceFlow_0nsrnox">
        <di:waypoint x="1000" y="157" />
        <di:waypoint x="1000" y="232" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="IntermediateCatchEvent_1qlsnli_di" bpmnElement="IntermediateThrowEvent_0or2gkm">
        <dc:Bounds x="982" y="232" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_0jilx9k_di" bpmnElement="SequenceFlow_0jilx9k">
        <di:waypoint x="1018" y="250" />
        <di:waypoint x="1090" y="250" />
        <di:waypoint x="1090" y="117" />
        <di:waypoint x="1162" y="117" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0yawdlr_di" bpmnElement="SequenceFlow_0yawdlr">
        <di:waypoint x="630" y="117" />
        <di:waypoint x="740" y="117" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="ScriptTask_0l8rb2w_di" bpmnElement="Task_0ea0spx">
        <dc:Bounds x="320" y="230" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_1d9k73x_di" bpmnElement="SequenceFlow_1d9k73x">
        <di:waypoint x="370" y="230" />
        <di:waypoint x="370" y="157" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0jefruw_di" bpmnElement="SequenceFlow_0jefruw">
        <di:waypoint x="215" y="117" />
        <di:waypoint x="268" y="117" />
        <di:waypoint x="268" y="270" />
        <di:waypoint x="320" y="270" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`
};