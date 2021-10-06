// Auto-generated. Do not edit!

// (in-package grid_map_msgs.srv)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;

//-----------------------------------------------------------

let GridMap = require('../msg/GridMap.js');

//-----------------------------------------------------------

class GetGridMapRequest {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.frame_id = null;
      this.position_x = null;
      this.position_y = null;
      this.length_x = null;
      this.length_y = null;
      this.layers = null;
    }
    else {
      if (initObj.hasOwnProperty('frame_id')) {
        this.frame_id = initObj.frame_id
      }
      else {
        this.frame_id = '';
      }
      if (initObj.hasOwnProperty('position_x')) {
        this.position_x = initObj.position_x
      }
      else {
        this.position_x = 0.0;
      }
      if (initObj.hasOwnProperty('position_y')) {
        this.position_y = initObj.position_y
      }
      else {
        this.position_y = 0.0;
      }
      if (initObj.hasOwnProperty('length_x')) {
        this.length_x = initObj.length_x
      }
      else {
        this.length_x = 0.0;
      }
      if (initObj.hasOwnProperty('length_y')) {
        this.length_y = initObj.length_y
      }
      else {
        this.length_y = 0.0;
      }
      if (initObj.hasOwnProperty('layers')) {
        this.layers = initObj.layers
      }
      else {
        this.layers = [];
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type GetGridMapRequest
    // Serialize message field [frame_id]
    bufferOffset = _serializer.string(obj.frame_id, buffer, bufferOffset);
    // Serialize message field [position_x]
    bufferOffset = _serializer.float64(obj.position_x, buffer, bufferOffset);
    // Serialize message field [position_y]
    bufferOffset = _serializer.float64(obj.position_y, buffer, bufferOffset);
    // Serialize message field [length_x]
    bufferOffset = _serializer.float64(obj.length_x, buffer, bufferOffset);
    // Serialize message field [length_y]
    bufferOffset = _serializer.float64(obj.length_y, buffer, bufferOffset);
    // Serialize message field [layers]
    bufferOffset = _arraySerializer.string(obj.layers, buffer, bufferOffset, null);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type GetGridMapRequest
    let len;
    let data = new GetGridMapRequest(null);
    // Deserialize message field [frame_id]
    data.frame_id = _deserializer.string(buffer, bufferOffset);
    // Deserialize message field [position_x]
    data.position_x = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [position_y]
    data.position_y = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [length_x]
    data.length_x = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [length_y]
    data.length_y = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [layers]
    data.layers = _arrayDeserializer.string(buffer, bufferOffset, null)
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += object.frame_id.length;
    object.layers.forEach((val) => {
      length += 4 + val.length;
    });
    return length + 40;
  }

  static datatype() {
    // Returns string type for a service object
    return 'grid_map_msgs/GetGridMapRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b6b21ecd617fdfa7f32e8c349cec3c2e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Frame id of the submap position request.
    string frame_id
    
    # Requested submap position in x-direction [m].
    float64 position_x
      
    # Requested submap position in y-direction [m].
    float64 position_y
    
    # Requested submap length in x-direction [m].
    float64 length_x
      
    # Requested submap width in y-direction [m].
    float64 length_y
    
    # Requested layers. If empty, get all layers.
    string[] layers
    
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new GetGridMapRequest(null);
    if (msg.frame_id !== undefined) {
      resolved.frame_id = msg.frame_id;
    }
    else {
      resolved.frame_id = ''
    }

    if (msg.position_x !== undefined) {
      resolved.position_x = msg.position_x;
    }
    else {
      resolved.position_x = 0.0
    }

    if (msg.position_y !== undefined) {
      resolved.position_y = msg.position_y;
    }
    else {
      resolved.position_y = 0.0
    }

    if (msg.length_x !== undefined) {
      resolved.length_x = msg.length_x;
    }
    else {
      resolved.length_x = 0.0
    }

    if (msg.length_y !== undefined) {
      resolved.length_y = msg.length_y;
    }
    else {
      resolved.length_y = 0.0
    }

    if (msg.layers !== undefined) {
      resolved.layers = msg.layers;
    }
    else {
      resolved.layers = []
    }

    return resolved;
    }
};

class GetGridMapResponse {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.map = null;
    }
    else {
      if (initObj.hasOwnProperty('map')) {
        this.map = initObj.map
      }
      else {
        this.map = new GridMap();
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type GetGridMapResponse
    // Serialize message field [map]
    bufferOffset = GridMap.serialize(obj.map, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type GetGridMapResponse
    let len;
    let data = new GetGridMapResponse(null);
    // Deserialize message field [map]
    data.map = GridMap.deserialize(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += GridMap.getMessageSize(object.map);
    return length;
  }

  static datatype() {
    // Returns string type for a service object
    return 'grid_map_msgs/GetGridMapResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '4f8e24cfd42bc1470fe765b7516ff7e5';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    # Submap
    grid_map_msgs/GridMap map
    
    
    ================================================================================
    MSG: grid_map_msgs/GridMap
    # Grid map header
    GridMapInfo info
    
    # Grid map layer names.
    string[] layers
    
    # Grid map basic layer names (optional). The basic layers
    # determine which layers from `layers` need to be valid
    # in order for a cell of the grid map to be valid.
    string[] basic_layers
    
    # Grid map data.
    std_msgs/Float32MultiArray[] data
    
    # Row start index (default 0).
    uint16 outer_start_index
    
    # Column start index (default 0).
    uint16 inner_start_index
    
    ================================================================================
    MSG: grid_map_msgs/GridMapInfo
    # Header (time and frame)
    Header header
    
    # Resolution of the grid [m/cell].
    float64 resolution
    
    # Length in x-direction [m].
    float64 length_x
    
    # Length in y-direction [m].
    float64 length_y
    
    # Pose of the grid map center in the frame defined in `header` [m].
    geometry_msgs/Pose pose
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    string frame_id
    
    ================================================================================
    MSG: geometry_msgs/Pose
    # A representation of pose in free space, composed of position and orientation. 
    Point position
    Quaternion orientation
    
    ================================================================================
    MSG: geometry_msgs/Point
    # This contains the position of a point in free space
    float64 x
    float64 y
    float64 z
    
    ================================================================================
    MSG: geometry_msgs/Quaternion
    # This represents an orientation in free space in quaternion form.
    
    float64 x
    float64 y
    float64 z
    float64 w
    
    ================================================================================
    MSG: std_msgs/Float32MultiArray
    # Please look at the MultiArrayLayout message definition for
    # documentation on all multiarrays.
    
    MultiArrayLayout  layout        # specification of data layout
    float32[]         data          # array of data
    
    
    ================================================================================
    MSG: std_msgs/MultiArrayLayout
    # The multiarray declares a generic multi-dimensional array of a
    # particular data type.  Dimensions are ordered from outer most
    # to inner most.
    
    MultiArrayDimension[] dim # Array of dimension properties
    uint32 data_offset        # padding elements at front of data
    
    # Accessors should ALWAYS be written in terms of dimension stride
    # and specified outer-most dimension first.
    # 
    # multiarray(i,j,k) = data[data_offset + dim_stride[1]*i + dim_stride[2]*j + k]
    #
    # A standard, 3-channel 640x480 image with interleaved color channels
    # would be specified as:
    #
    # dim[0].label  = "height"
    # dim[0].size   = 480
    # dim[0].stride = 3*640*480 = 921600  (note dim[0] stride is just size of image)
    # dim[1].label  = "width"
    # dim[1].size   = 640
    # dim[1].stride = 3*640 = 1920
    # dim[2].label  = "channel"
    # dim[2].size   = 3
    # dim[2].stride = 3
    #
    # multiarray(i,j,k) refers to the ith row, jth column, and kth channel.
    
    ================================================================================
    MSG: std_msgs/MultiArrayDimension
    string label   # label of given dimension
    uint32 size    # size of given dimension (in type units)
    uint32 stride  # stride of given dimension
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new GetGridMapResponse(null);
    if (msg.map !== undefined) {
      resolved.map = GridMap.Resolve(msg.map)
    }
    else {
      resolved.map = new GridMap()
    }

    return resolved;
    }
};

module.exports = {
  Request: GetGridMapRequest,
  Response: GetGridMapResponse,
  md5sum() { return '802c2cbc7b10fada2d44db75ddb8c738'; },
  datatype() { return 'grid_map_msgs/GetGridMap'; }
};
