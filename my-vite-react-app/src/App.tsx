
const MICProject = () => {
  return (
    <div style={styles.container}>
      {/* Title Section */}
      <section style={styles.section}>
        <h1 >Improving Anatomical Plausibility in Medical Image Segmentation Using Hybrid Graph Neural Networks</h1>
      </section>

      {/* Introduction Section */}
      <section style={styles.section}>
        <h2 style={styles.subtitle}>Introduction</h2>
        <p>Medical image segmentation plays a crucial role in diagnosing and treating diseases.</p>
        <p>
          Conventional methods like CNNs perform well in pixel-level tasks but fail to ensure anatomical plausibility, often leading to fragmented or topologically incorrect results.
        </p>
        <p>
          HybridGNet combines Convolutional Neural Networks (CNNs) and Graph Convolutional Neural Networks (GCNNs) to improve segmentation accuracy while enforcing anatomical constraints. 
        </p>
        <p>The approach is applied to chest X-rays to segment heart and lung structures with higher anatomical fidelity.</p>
      </section>

      {/* Problem Statement Section */}
      <section style={styles.section}>
        <h2 style={styles.subtitle}>Problem Statement</h2>
        <p>Medical image segmentation is crucial for tasks like disease diagnosis, therapy planning, and patient monitoring.</p>
        <ul>
          <li>Fragmented and anatomically implausible segmentations.</li>
          <li>Topological inconsistencies, particularly in complex real-world scenarios.</li>
          <li>Need: A method that incorporates anatomical constraints to ensure outputs align with expected anatomical structures.</li>
        </ul>
      </section>

      {/* Motivation Section */}
      <section style={styles.section}>
        <h2 style={styles.subtitle}>Motivation</h2>
        <p>Impact of accurate medical segmentation:</p>
        <ul>
          <li>Precise segmentation aids diagnosis, therapy planning, and disease monitoring.</li>
          <li>Reduces errors in measuring clinical metrics and improves outcomes.</li>
        </ul>
        <p>Proposed Solution:</p>
        <ul>
          <li>HybridGNet leverages graph-based representations for topological constraints.</li>
          <li>Ensures robust performance across challenging conditions.</li>
        </ul>
      </section>

      {/* Related Work Section */}
      <section style={styles.section}>
        <h2 style={styles.subtitle}>Related Work</h2>
        <h3>Pixel-Based Approaches</h3>
        <p>Methods like UNet achieve high accuracy in dense pixel-level tasks but lack sensitivity to anatomical structures.</p>
        <h3>Landmark-Based and Graph-Based Methods</h3>
        <p>Graph Neural Networks (GCNNs) represent anatomical structures but are often task-specific.</p>
      </section>

      {/* Methodology Section */}
      <section style={styles.section}>
        <h2 style={styles.subtitle}>Methodology</h2>
        <h3>HybridGNet Architecture</h3>
        <p>Combines CNN-based feature extraction and GCNN-based graph decoding.</p>
        <h3>Image-to-Graph Skip Connections (IGSC)</h3>
        <p>Transfers localized CNN features to GCNNs for improved accuracy.</p>
      </section>

      {/* Results Section */}
      <section style={styles.section}>
        <h2 style={styles.subtitle}>Results</h2>
        <h3>Quantitative Performance</h3>
        <p>Outperformed traditional methods in metrics like Dice Coefficient and Hausdorff Distance.</p>
        <h3>Robustness</h3>
        <p>Stable across domain shifts and occlusions.</p>
      </section>

      {/* Conclusion Section */}
      <section style={styles.section}>
        <h2 style={styles.subtitle}>Conclusion</h2>
        <p>HybridGNet ensures anatomically plausible medical image segmentation, bridging the gap between pixel and landmark-based methods.</p>
        <h3>Future Work</h3>
        <p>Explore applications in 3D datasets and other medical imaging tasks.</p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    margin: "0 auto",
    maxWidth: "900px",
    lineHeight: "1.6",
  },
  section: {
    margin: "20px 0",
    padding: "20px",
    borderBottom: "1px solid #ccc",
  },
  title: {
    fontSize: "24px",
    textAlign: "center",
    margin: "10px 0",
  },
  subtitle: {
    fontSize: "20px",
    color: "#333",
  },
};

export default MICProject;
